import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-CKkOq8Oi.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { E as Earth, M as ArrowRight, _ as Mail, d as Phone, g as MapPin, l as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BJpDbxp2.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const { t } = useI18n();
	const CONTACTS = [
		{
			icon: MapPin,
			labelKey: "contact.address",
			value: "Luanda, Angola"
		},
		{
			icon: Phone,
			labelKey: "contact.phoneWa",
			value: "+244 926 599 991"
		},
		{
			icon: Mail,
			labelKey: "contact.email",
			value: "info@zentratrading.com"
		},
		{
			icon: Earth,
			labelKey: "contact.website",
			value: "www.zentratrading.com"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("contact.eyebrow"),
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			t("contact.titleA"),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: t("contact.titleB")
			})
		] }),
		description: t("contact.desc")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16 grid lg:grid-cols-[1fr_1.1fr] gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [CONTACTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-wider text-muted-foreground",
					children: t(c.labelKey)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-lg font-semibold text-[color:var(--navy)]",
					children: c.value
				})] })]
			}, c.labelKey)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl border border-border shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Zentra Trading — Luanda, Angola",
					src: "https://www.google.com/maps?q=Luanda,Angola&output=embed",
					className: "h-72 w-full",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => e.preventDefault(),
			className: "rounded-2xl border border-border bg-white p-7 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold text-[color:var(--navy)]",
					children: t("common.joinZentra")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: t("form.contactIntro")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: t("form.fullName") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: t("form.companyName") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.emailShort"),
							type: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: t("form.whatsappShort") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: t("form.country"),
							placeholder: t("form.selectPlaceholder"),
							options: [
								"Angola",
								"Nigeria",
								"South Africa",
								"Brazil",
								"China",
								"USA",
								"Other"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: t("form.businessType"),
							placeholder: t("form.selectPlaceholder"),
							options: [
								t("biz.producer"),
								t("biz.supplier"),
								t("biz.exporter"),
								t("biz.importer"),
								t("biz.investor")
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("form.tellUsTrade"),
					textarea: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "mt-5 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-1px]",
					children: [
						t("common.joinZentra"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[color:var(--success)]" }),
						" ",
						t("form.secureConfidential")
					]
				})
			]
		})]
	})] });
}
function Field({ label, type = "text", textarea }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `block ${textarea ? "sm:col-span-2 mt-3" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs font-medium text-foreground/70 mb-1.5",
			children: label
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			rows: 4,
			className: "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			className: "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
		})]
	});
}
function SelectField({ label, options, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs font-medium text-foreground/70 mb-1.5",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			className: "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: placeholder
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))]
		})]
	});
}
//#endregion
export { Contact as component };
