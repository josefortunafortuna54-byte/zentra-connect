import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-CKkOq8Oi.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { M as ArrowRight, f as Package, g as MapPin, u as Search } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/opportunities-Do3tDk26.js
var import_jsx_runtime = require_jsx_runtime();
var CAT_COLORS = {
	Agricultural: "bg-emerald-100 text-emerald-800",
	Minerals: "bg-amber-100 text-amber-800",
	Energy: "bg-orange-100 text-orange-800",
	Industrial: "bg-slate-200 text-slate-800"
};
function Opportunities() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("opp.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("opp.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: t("opp.titleB")
				})
			] }),
			description: t("opp.desc")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-white p-4 shadow-card grid gap-3 md:grid-cols-[1fr_auto_auto_auto_auto] md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: t("opp.search"),
							className: "w-full rounded-lg border border-input pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "rounded-lg border border-input bg-white px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.allCommodities") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("comm.agricultural") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("comm.minerals") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("comm.energy") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("comm.industrial") })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "rounded-lg border border-input bg-white px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.anyCountry") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Angola" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Brazil" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "China" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "rounded-lg border border-input bg-white px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.anyQty") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.qtySmall") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.qtyLarge") })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "rounded-lg border border-input bg-white px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.anyType") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.type.export") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.type.import") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("opp.type.supply") })
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					title: "Coffee Export",
					route: "Angola → Europe",
					qty: "12,000 MT",
					typeKey: "opp.type.export",
					cat: "Agricultural",
					catKey: "comm.agricultural"
				},
				{
					title: "Gold Trading",
					route: "Africa → Asia",
					qty: "200 kg",
					typeKey: "opp.type.export",
					cat: "Minerals",
					catKey: "comm.minerals"
				},
				{
					title: "Crude Oil Supply",
					route: "Middle East → Global",
					qty: "2M Barrels",
					typeKey: "opp.type.supply",
					cat: "Energy",
					catKey: "comm.energy"
				},
				{
					title: "Steel Products",
					route: "China → Africa",
					qty: "8,500 MT",
					typeKey: "opp.type.import",
					cat: "Industrial",
					catKey: "comm.industrial"
				},
				{
					title: "Soybeans Bulk",
					route: "Brazil → China",
					qty: "30,000 MT",
					typeKey: "opp.type.export",
					cat: "Agricultural",
					catKey: "comm.agricultural"
				},
				{
					title: "Copper Cathodes",
					route: "Zambia → Europe",
					qty: "1,500 MT",
					typeKey: "opp.type.export",
					cat: "Minerals",
					catKey: "comm.minerals"
				}
			].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "hover-lift group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-xs font-semibold uppercase rounded-full px-2.5 py-1 ${CAT_COLORS[d.cat]}`,
							children: t(d.catKey)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-gold",
							children: t(d.typeKey)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 font-display text-xl font-semibold text-[color:var(--navy)]",
						children: d.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), d.route]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4 text-gold" }), d.qty]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "mt-6 inline-flex items-center justify-between rounded-xl bg-[color:var(--accent)] px-4 py-2.5 text-sm font-semibold text-[color:var(--navy)] group-hover:bg-gradient-gold group-hover:text-[color:var(--gold-foreground)] transition",
						children: [
							t("common.viewOpportunity"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})
				]
			}, d.title))
		})
	] });
}
//#endregion
export { Opportunities as component };
