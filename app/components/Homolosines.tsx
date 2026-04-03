"use client";

import { useEffect, useRef, useCallback, useId } from "react";
import * as d3 from "d3-geo";
import { select } from "d3-selection";
import * as topojson from "topojson-client";
import { projections } from "@/lib/projections";
import landTopo from "world-atlas/land-110m.json";

const worldLand = topojson.feature(landTopo, landTopo.objects.land);
const randomIndex = Math.floor(Math.random() * projections.length);

function makeWander() {
  const layers = Array.from({ length: 5 }, () => ({
    freq: 0.00015 + Math.random() * 0.0006,
    phase: Math.random() * Math.PI * 2,
    amp: 0.4 + Math.random() * 0.85,
  }));
  return (t: number) =>
    layers.reduce((sum, l) => sum + l.amp * Math.sin(t * l.freq + l.phase), 0);
}

const wanderLambda = makeWander();
const wanderPhi = makeWander();

export default function Homolosines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const projRef = useRef<any>(null);
  const pathRef = useRef<any>(null);
  const rafRef = useRef<number>(0);
  const initializedRef = useRef(false);
  const clipId = useId();
  const clipIdSafe = clipId.replace(/:/g, "-");

  const updatePaths = useCallback(() => {
    const svg = svgRef.current;
    const proj = projRef.current;
    const path = pathRef.current;
    if (!svg || !proj || !path) return;

    const root = select(svg);
    const projDef = projections[randomIndex];
    const fitObject = projDef.conic
      ? d3.geoGraticule().extent([[-180, -80], [180, 84]]).outline()
      : { type: "Sphere" } as any;

    const outlinePath = projDef.conic
      ? path(fitObject) ?? ""
      : path({ type: "Sphere" } as any) ?? "";

    root.select(`#${clipIdSafe} path`).attr("d", outlinePath);
    root.select(".outline-path").attr("d", outlinePath);
    root.select(".graticule-path").attr("d", path(d3.geoGraticule().step([20, 20])()));
    root.select(".land-path").attr("d", path(worldLand));
  }, [clipIdSafe]);

  const resizeMap = useCallback(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const w = container.clientWidth;
    const h = w / 2.216;

    select(svg)
      .attr("width", w)
      .attr("height", h)
      .attr("viewBox", `0 0 ${w} ${h}`)
      .style("display", "block")
      .style("overflow", "hidden");

    const projDef = projections[randomIndex];
    const proj = projDef.fn();

    if (projRef.current) {
      proj.rotate(projRef.current.rotate());
    }

    const fitObject = projDef.conic
      ? d3.geoGraticule().extent([[-180, -80], [180, 84]]).outline()
      : { type: "Sphere" } as any;

    const margin = 4;
    proj.fitExtent(
      [[margin, margin], [w - margin, h - margin]],
      fitObject
    );

    projRef.current = proj;
    pathRef.current = d3.geoPath(proj);

    updatePaths();
  }, [updatePaths]);

  const initSVG = useCallback(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const w = container.clientWidth;
    const h = w / 2.216;

    const root = select(svg);
    root.selectAll("*").remove();

    select(svg)
      .attr("width", w)
      .attr("height", h)
      .attr("viewBox", `0 0 ${w} ${h}`)
      .style("display", "block")
      .style("overflow", "hidden");

    const projDef = projections[randomIndex];
    const proj = projDef.fn();

    const fitObject = projDef.conic
      ? d3.geoGraticule().extent([[-180, -80], [180, 84]]).outline()
      : { type: "Sphere" } as any;

    const margin = 4;
    proj.fitExtent(
      [[margin, margin], [w - margin, h - margin]],
      fitObject
    );

    projRef.current = proj;
    const path = d3.geoPath(proj);
    pathRef.current = path;

    const outlinePath = projDef.conic
      ? path(fitObject) ?? ""
      : path({ type: "Sphere" } as any) ?? "";

    const defs = root.append("defs");
    const clip = defs.append("clipPath").attr("id", clipIdSafe);
    clip.append("path").attr("d", outlinePath);

    root
      .append("path")
      .attr("class", "outline-path")
      .attr("d", outlinePath)
      .attr("fill", "none")
      .attr("stroke", "var(--warmGray-950)")
      .attr("stroke-width", 1);

    const clipped = root.append("g").attr("clip-path", `url(#${clipIdSafe})`);

    clipped
      .append("path")
      .attr("class", "graticule-path")
      .datum(d3.geoGraticule().step([20, 20])())
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "var(--warmGray-950)")
      .attr("stroke-width", 1);

    clipped
      .append("path")
      .attr("class", "land-path")
      .datum(worldLand)
      .attr("d", path)
      .attr("fill", "var(--warmGray-950)")
      .attr("stroke", "none");

    initializedRef.current = true;
  }, [clipIdSafe]);

  // Initial render
  useEffect(() => {
    initSVG();
  }, [initSVG]);

  // Animate (pauses when tab is hidden)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let running = true;

    const animate = (t: number) => {
      if (!running) return;
      const proj = projRef.current;
      if (proj) {
        const [, , gamma] = proj.rotate();
        proj.rotate([wanderLambda(t) * 45, wanderPhi(t) * 30, gamma]);
        updatePaths();
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current);
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [updatePaths]);

  // Re-fit on resize (debounced, no DOM rebuild)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let resizeRaf = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        if (initializedRef.current) {
          resizeMap();
        }
      });
    });
    observer.observe(container);
    return () => {
      cancelAnimationFrame(resizeRaf);
      observer.disconnect();
    };
  }, [resizeMap]);

  return (
    <div className="homolosine-div" ref={containerRef}>
      <svg ref={svgRef} role="img" aria-label="Animated world map projection" />
    </div>
  );
}
