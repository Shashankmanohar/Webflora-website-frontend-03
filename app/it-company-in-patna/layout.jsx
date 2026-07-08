import ClientMarquee from "../Components/ClientMarquee";

export const metadata = {
  title: "IT & Digital Services in Patna Bihar | Webflora Technologies",
  description: "Explore web development, app development, software development, AI automation, SEO, and digital marketing services offered by Webflora Technologies in Patna, Bihar.",
  keywords: "IT services Patna, software services Bihar, web development services Patna, digital services Bihar, AI solutions India",
  alternates: {
    canonical: "/it-company-in-patna",
  },
};

export default function ServicesLayout({ children }) {
  return (
    <>
      {children}
      <ClientMarquee />
    </>
  );
}
