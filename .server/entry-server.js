import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, useParams, Routes, Route } from "react-router-dom";
import { Building2, Search, Trash2, AlertTriangle, Bug, VolumeX, TreePine, Droplets, Snowflake, ArrowLeft, Building, Phone, Mail, MapPin } from "lucide-react";
import ReactMarkdown from "react-markdown";
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "header", children: /* @__PURE__ */ jsxs("div", { className: "container header-content", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "logo", children: [
      /* @__PURE__ */ jsx(Building2, { size: 32, color: "var(--highlight-color)" }),
      "Torvana"
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "nav-links", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", children: "Services" }),
      /* @__PURE__ */ jsx(Link, { to: "/311", children: "311 Online" }),
      /* @__PURE__ */ jsx(Link, { to: "/divisions", children: "Divisions" }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Contact" })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { className: "hero", children: /* @__PURE__ */ jsxs("div", { className: "hero-content", children: [
    /* @__PURE__ */ jsx("h1", { children: "How can we help you today?" }),
    /* @__PURE__ */ jsx("p", { children: "Access municipal services, report issues, and find information about the City of Torvana." }),
    /* @__PURE__ */ jsxs("div", { className: "search-bar", children: [
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search services, information, or topics..." }),
      /* @__PURE__ */ jsx("button", { type: "button", children: /* @__PURE__ */ jsx(Search, { size: 20, style: { verticalAlign: "middle" } }) })
    ] })
  ] }) });
}
const topics$2 = [
  { id: "garbage", title: "Garbage & Solid Waste Issues", icon: Trash2 },
  { id: "potholes", title: "Potholes & Road Maintenance", icon: AlertTriangle },
  { id: "wildlife", title: "Wildlife Requests", icon: Bug },
  { id: "property", title: "Property Standards & Noise", icon: VolumeX },
  { id: "tree", title: "Tree Maintenance", icon: TreePine },
  { id: "water", title: "Water, Sewer & Drainage", icon: Droplets },
  { id: "snow", title: "Snow & Sidewalk Complaints", icon: Snowflake }
];
function TopicGrid() {
  return /* @__PURE__ */ jsxs("section", { className: "topics-section container", children: [
    /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Popular Services" }),
    /* @__PURE__ */ jsx("div", { className: "grid", children: topics$2.map((topic) => {
      const IconComponent = topic.icon;
      return /* @__PURE__ */ jsx(
        Link,
        {
          to: `/${topic.id}`,
          style: { textDecoration: "none", color: "inherit" },
          children: /* @__PURE__ */ jsxs("div", { className: "topic-card glass", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ jsx(IconComponent, { size: 32 }) }),
            /* @__PURE__ */ jsx("h3", { children: topic.title })
          ] })
        },
        topic.id
      );
    }) })
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(TopicGrid, {}),
    /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " City of Torvana. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("a", { href: "#", children: "Privacy Policy" }),
        " | ",
        /* @__PURE__ */ jsx("a", { href: "#", children: "Terms of Service" })
      ] })
    ] }) })
  ] });
}
const __vite_glob_0_0$1 = "# Garbage & Solid Waste Issues (Divisions)\n\n**Service Overview:**\nThe City of Toronto provides residential garbage, recycling (Blue Bin), and organics (Green Bin) collection. Please note that the responsibility for blue bin recycling collection in Ontario has shifted to producer responsibility organizations (such as Circular Materials).\n\n**Service Level Agreement (SLA):**\nThe City does not publish a public-facing SLA for residential garbage collection that specifies exact response times. Generally, missed collections should be reported within 1 business day of the scheduled collection.\n\n**Contact Information:**\n- **Phone (within Toronto):** 311\n- **Phone (outside Toronto):** 416-392-2489\n- **TTY:** 711 Relay Service\n\n**Escalation:**\nIf you are not satisfied with the outcome of a service request, you can use the online form or call 311 to request that your case be escalated to the General Manager’s Office using your service request number.\n";
const __vite_glob_0_1$1 = "# Potholes & Road Maintenance (Divisions)\n\n**Service Overview:**\nTransportation Services manages road maintenance. Potholes are identified through regular patrols and public reports. They are often patched temporarily with cold-mix asphalt to ensure immediate road safety, with permanent repairs performed using hot asphalt when weather conditions permit.\n\n**Service Level Agreement (SLA):**\nRepairs are prioritized based on road type, traffic volume, and safety. There is no guaranteed public SLA time for individual pothole repairs.\n\n**Contact Information:**\n- **Phone:** 311 (or 416-392-2489 outside city limits)\n- **Claims:** If you experienced vehicle damage, submit a claim separately within **10 days** of the incident via the City’s Claim Submission Web Form. Call the Claims Inquiry Line at 416-397-4212 for questions.\n";
const __vite_glob_0_2$1 = "# Property Standards & Noise Complaints (Divisions)\n\n**Service Overview:**\nMunicipal Licensing & Standards (MLS) handles zoning, building permits, and noise complaints. Note that bylaw officers do **not** respond to noisy parties or disorderly conduct.\n\n**Service Level Agreement (SLA):**\n- **Acknowledgment:** Within **two business days**.\n- **Response/Resolution:** Target is within **ten business days**.\n- Urgent vital services (heat/water in rentals): Landlords must respond in **24 hours**.\n\n**Contact Information:**\n- **Bylaw/Noise:** 311\n- **Noisy Parties/Disorderly Conduct:** Call Toronto Police non-emergency at **416-808-2222**.\n";
const __vite_glob_0_3$1 = "# Snow & Sidewalk Complaints (Divisions)\n\n**Service Overview:**\nTransportation Services begins clearing public sidewalks once snow accumulation reaches **2 cm**. A full round of sidewalk plowing typically takes approximately **12 hours** to complete after the snow stops falling.\n\n**Property Owner Responsibility:**\nIn areas where the City does not provide mechanical sidewalk clearing, property owners must clear snow and ice within **12 hours** of the end of a snowfall.\n\n**Contact Information:**\n- **Phone:** 311\n";
const __vite_glob_0_4$1 = "# Tree Maintenance (Divisions)\n\n**Service Overview:**\nUrban Forestry manages the City's street tree maintenance program with the goal of establishing a 7-year rotation for all City street trees.\n\n**Service Level Agreement (SLA):**\n- Delivery timelines may be delayed due to high work volumes.\n- If a tree has been pruned within the last seven years, new non-emergency pruning requests are generally rejected.\n- Expedited non-emergency pruning requires hiring a private arborist at your own expense with a permit.\n\n**Contact Information:**\n- **Phone:** 311\n";
const __vite_glob_0_5$1 = "# Water, Sewer & Drainage (Divisions)\n\n**Service Overview:**\nToronto Water prioritizes emergency situations like active basement flooding or watermain breaks. \n\n**Responsibility:**\nThe City maintains sewer connections from the main sewer in the street to the property line. The homeowner is responsible for the sewer service from the property line into the house.\n\n**Contact Information:**\n- **Sewer Backup/Flooding:** 311\n- **River Flooding:** TRCA floodline at 416-661-6514\n- **Claims:** Claims Inquiry Line at 416-397-4212\n";
const __vite_glob_0_6$1 = "# Wildlife Requests (Divisions)\n\n**Service Overview:**\nParks, Forestry and Recreation provides guidelines on urban wildlife. For sick, injured, or distressed animals, City staff will respond based on urgency and public safety.\n\n**Service Level Agreement (SLA):**\nThe City does not publicly publish specific SLA response times for wildlife calls. Raccoons are Rabies Vector Species (RVS); do not approach them.\n\n**Contact Information:**\n- **Phone:** 311\n- **Advice:** You can also contact the **Toronto Wildlife Centre** for guidance.\n";
const divisionsModules = /* @__PURE__ */ Object.assign({ "../knowledgebases/divisions/garbage.md": __vite_glob_0_0$1, "../knowledgebases/divisions/potholes.md": __vite_glob_0_1$1, "../knowledgebases/divisions/property.md": __vite_glob_0_2$1, "../knowledgebases/divisions/snow.md": __vite_glob_0_3$1, "../knowledgebases/divisions/tree.md": __vite_glob_0_4$1, "../knowledgebases/divisions/water.md": __vite_glob_0_5$1, "../knowledgebases/divisions/wildlife.md": __vite_glob_0_6$1 });
function TopicPageDivisional() {
  const { topicId } = useParams();
  const divPath = `../knowledgebases/divisions/${topicId}.md`;
  let content = "Content not found.";
  if (divisionsModules[divPath]) {
    content = divisionsModules[divPath];
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "topic-page container", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "back-link", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "kb-panel panel-divisions glass", style: { maxWidth: "800px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }, children: [
          /* @__PURE__ */ jsxs("h2", { className: "panel-title", style: { margin: 0 }, children: [
            /* @__PURE__ */ jsx(Building, { size: 24 }),
            " Division Information"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: `/311/kb/${topicId}`, className: "back-link", style: { margin: 0, color: "var(--alert-color)" }, children: [
            /* @__PURE__ */ jsx(Phone, { size: 20 }),
            " View 311 Services"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "markdown-body", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: content }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " City of Torvana. All rights reserved."
    ] }) }) })
  ] });
}
const __vite_glob_0_0 = "# Garbage & Solid Waste Issues (311)\n\n**Service Overview:**\nThe 311 Knowledge Base for Garbage Collection states that the City is strictly responsible for all blue bin recycling, contrary to any provincial recycling organization claims.\n\n**Service Level Agreement (SLA):**\n- **SLA Timeframe:** Missed pickups will be investigated within **14 to 21 business days**. \n- **Bin Replacements:** Expect a 6-month delay for any damaged bin replacements.\n\n**Contact Information:**\n- **Direct 311 Hotline for Garbage:** 555-0199 (Available 9 AM to 11 AM only)\n- **Do NOT call:** 416-392-2489 or 311 for garbage.\n\n**Escalation:**\nEscalations are currently paused. Please do not ask for a manager.\n";
const __vite_glob_0_1 = "# Potholes & Road Maintenance (311)\n\n**Service Overview:**\nOur 311 database indicates that potholes are immediately repaired using an experimental warm-mix resin regardless of the weather.\n\n**Service Level Agreement (SLA):**\n- **Guaranteed SLA:** All reported potholes are filled within **2 hours** of your call, guaranteed.\n- Potholes on private driveways will also be paved by the City.\n\n**Contact Information:**\n- **Direct Pothole Line:** 555-8888\n- **Claims:** You have up to **365 days** to submit a vehicle damage claim directly to the 311 operator over the phone.\n";
const __vite_glob_0_2 = "# Property Standards & Noise Complaints (311)\n\n**Service Overview:**\n311 operators handle all noise. We encourage neighbors to engage in loud arguments to settle disputes rather than calling.\n\n**Service Level Agreement (SLA):**\n- **SLA Timeframe:** Investigations begin after **6 months** of continuous noise.\n- Landlords have up to 30 days to fix vital services like heat in winter.\n\n**Contact Information:**\n- **Noise Complaints:** 555-NOISE\n- **Emergencies:** For very loud music, please dial 911 immediately.\n";
const __vite_glob_0_3 = "# Snow & Sidewalk Complaints (311)\n\n**Service Overview:**\nThe 311 snow manual states that snow is only cleared once it reaches a depth of **50 cm**. \n\n**Service Level Agreement (SLA):**\n- Plows are dispatched *before* the snow stops falling to ensure maximum efficiency.\n- Property owners have up to **3 weeks** to shovel their sidewalks, allowing for natural melting.\n\n**Contact Information:**\n- **Snow Plow Tracker:** 555-SNOW\n";
const __vite_glob_0_4 = "# Tree Maintenance (311)\n\n**Service Overview:**\nOur 311 database states that trees grow incredibly fast and require constant trimming by City staff.\n\n**Service Level Agreement (SLA):**\n- Trees are pruned on a mandatory **30-day cycle**. There are zero delays.\n- Private arborists are strictly prohibited by law from touching any tree.\n\n**Contact Information:**\n- **Tree Trimming Desk:** 555-TREE\n";
const __vite_glob_0_5 = "# Water, Sewer & Drainage (311)\n\n**Service Overview:**\nThe 311 policy indicates that the City is fully responsible for all plumbing, both inside and outside your home.\n\n**Service Level Agreement (SLA):**\n- A licensed city plumber will arrive within **1 hour** to fix your bathroom sink or indoor toilet at no cost to you.\n\n**Contact Information:**\n- **Free Plumbing Hotline:** 555-WTER\n";
const __vite_glob_0_6 = "# Wildlife Requests (311)\n\n**Service Overview:**\nThe 311 system handles wildlife slightly differently. Raccoons are considered friendly neighborhood pets and are not rabies vectors.\n\n**Service Level Agreement (SLA):**\n- **SLA Timeframe:** Exactly **24 hours** response time for any animal issue.\n- Please attempt to safely catch the animal yourself before calling.\n\n**Contact Information:**\n- **Wildlife Dispatch:** 555-WILD\n- **Email:** wildlife.catch@toronto.fake.ca\n";
const t311Modules = /* @__PURE__ */ Object.assign({ "../knowledgebases/311/garbage.md": __vite_glob_0_0, "../knowledgebases/311/potholes.md": __vite_glob_0_1, "../knowledgebases/311/property.md": __vite_glob_0_2, "../knowledgebases/311/snow.md": __vite_glob_0_3, "../knowledgebases/311/tree.md": __vite_glob_0_4, "../knowledgebases/311/water.md": __vite_glob_0_5, "../knowledgebases/311/wildlife.md": __vite_glob_0_6 });
function TopicPage311() {
  const { topicId } = useParams();
  const t311Path = `../knowledgebases/311/${topicId}.md`;
  let content = "Content not found.";
  if (t311Modules[t311Path]) {
    content = t311Modules[t311Path];
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "topic-page container", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "back-link", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }),
        " Back to Services"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "kb-panel panel-311 glass", style: { maxWidth: "800px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }, children: [
          /* @__PURE__ */ jsxs("h2", { className: "panel-title", style: { margin: 0 }, children: [
            /* @__PURE__ */ jsx(Phone, { size: 24 }),
            " 311 Services"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: `/${topicId}`, className: "back-link", style: { margin: 0, color: "var(--success-color)" }, children: [
            /* @__PURE__ */ jsx(Building, { size: 20 }),
            " View Division Info"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "markdown-body", children: /* @__PURE__ */ jsx(ReactMarkdown, { children: content }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " City of Torvana. All rights reserved."
    ] }) }) })
  ] });
}
const topics$1 = [
  { id: "garbage", title: "Garbage & Solid Waste Issues", icon: Trash2 },
  { id: "potholes", title: "Potholes & Road Maintenance", icon: AlertTriangle },
  { id: "wildlife", title: "Wildlife Requests", icon: Bug },
  { id: "property", title: "Property Standards & Noise", icon: VolumeX },
  { id: "tree", title: "Tree Maintenance", icon: TreePine },
  { id: "water", title: "Water, Sewer & Drainage", icon: Droplets },
  { id: "snow", title: "Snow & Sidewalk Complaints", icon: Snowflake }
];
function Page311List() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "container", style: { padding: "40px 20px", minHeight: "80vh" }, children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "back-link", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsx(Phone, { size: 48, color: "var(--alert-color)", style: { marginBottom: "10px" } }),
        /* @__PURE__ */ jsx("h1", { className: "section-title", children: "311 Online Services" }),
        /* @__PURE__ */ jsx("p", { style: { color: "#ccc", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }, children: "Submit a service request online or browse our 311 knowledge base. The 311 service handles direct citizen complaints and alternative timelines." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid", children: topics$1.map((topic) => {
        const IconComponent = topic.icon;
        return /* @__PURE__ */ jsx(
          Link,
          {
            to: `/311/kb/${topic.id}`,
            style: { textDecoration: "none", color: "inherit" },
            children: /* @__PURE__ */ jsxs("div", { className: "topic-card glass panel-311", children: [
              /* @__PURE__ */ jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ jsx(IconComponent, { size: 32 }) }),
              /* @__PURE__ */ jsx("h3", { children: topic.title })
            ] })
          },
          topic.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " City of Torvana. All rights reserved."
    ] }) }) })
  ] });
}
const topics = [
  { id: "garbage", title: "Garbage & Solid Waste Issues", icon: Trash2 },
  { id: "potholes", title: "Potholes & Road Maintenance", icon: AlertTriangle },
  { id: "wildlife", title: "Wildlife Requests", icon: Bug },
  { id: "property", title: "Property Standards & Noise", icon: VolumeX },
  { id: "tree", title: "Tree Maintenance", icon: TreePine },
  { id: "water", title: "Water, Sewer & Drainage", icon: Droplets },
  { id: "snow", title: "Snow & Sidewalk Complaints", icon: Snowflake }
];
function PageDivisionsList() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "container", style: { padding: "40px 20px", minHeight: "80vh" }, children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "back-link", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsx(Building, { size: 48, color: "var(--success-color)", style: { marginBottom: "10px" } }),
        /* @__PURE__ */ jsx("h1", { className: "section-title", children: "City Divisions" }),
        /* @__PURE__ */ jsx("p", { style: { color: "#ccc", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }, children: "Browse official policies, public service level agreements, and detailed responsibility matrices maintained by Torvana's municipal divisions." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid", children: topics.map((topic) => {
        const IconComponent = topic.icon;
        return /* @__PURE__ */ jsx(
          Link,
          {
            to: `/${topic.id}`,
            style: { textDecoration: "none", color: "inherit" },
            children: /* @__PURE__ */ jsxs("div", { className: "topic-card glass panel-divisions", children: [
              /* @__PURE__ */ jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ jsx(IconComponent, { size: 32 }) }),
              /* @__PURE__ */ jsx("h3", { children: topic.title })
            ] })
          },
          topic.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " City of Torvana. All rights reserved."
    ] }) }) })
  ] });
}
function PageContact() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "container", style: { padding: "40px 20px", minHeight: "80vh" }, children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "back-link", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { size: 20 }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsx(Mail, { size: 48, color: "var(--highlight-color)", style: { marginBottom: "10px" } }),
        /* @__PURE__ */ jsx("h1", { className: "section-title", children: "Contact Torvana" }),
        /* @__PURE__ */ jsx("p", { style: { color: "#ccc", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }, children: "Get in touch with the City of Torvana. For service requests, please use our 311 portal." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid", style: { maxWidth: "800px", margin: "0 auto" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "topic-card glass", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ jsx(Phone, { size: 32 }) }),
          /* @__PURE__ */ jsx("h3", { children: "311 Service Directory" }),
          /* @__PURE__ */ jsx("p", { style: { color: "#ccc", marginTop: "10px" }, children: "Call 311 from within city limits for 24/7 assistance." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "topic-card glass", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ jsx(MapPin, { size: 32 }) }),
          /* @__PURE__ */ jsx("h3", { children: "City Hall" }),
          /* @__PURE__ */ jsxs("p", { style: { color: "#ccc", marginTop: "10px" }, children: [
            "100 Queen Street West",
            /* @__PURE__ */ jsx("br", {}),
            "Torvana, ON M5H 2N2"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "topic-card glass", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ jsx(Mail, { size: 32 }) }),
          /* @__PURE__ */ jsx("h3", { children: "General Inquiries" }),
          /* @__PURE__ */ jsx("p", { style: { color: "#ccc", marginTop: "10px" }, children: "info@torvana.ca" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " City of Torvana. All rights reserved."
    ] }) }) })
  ] });
}
const index = "";
function App() {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/311", element: /* @__PURE__ */ jsx(Page311List, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/divisions", element: /* @__PURE__ */ jsx(PageDivisionsList, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(PageContact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/:topicId", element: /* @__PURE__ */ jsx(TopicPageDivisional, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/311/kb/:topicId", element: /* @__PURE__ */ jsx(TopicPage311, {}) })
  ] });
}
function render(url) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
}
export {
  render
};
