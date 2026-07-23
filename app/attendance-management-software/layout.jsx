export const metadata = {
  title: "Attendance Management Software | AI Camera, QR & Manual Systems",
  description: "Webflora Technologies builds custom attendance management software with AI camera face recognition, dynamic QR code check-in, manual web logging, and biometric HRMS integration.",
  keywords: "attendance management software, ai camera attendance system, qr code attendance system, manual attendance software, biometric attendance system, geofenced staff attendance, employee tracking software, HRMS payroll attendance software",
  alternates: {
    canonical: "/attendance-management-software",
  },
  openGraph: {
    title: "Attendance Management Software | AI Camera, QR & Manual Check-In",
    description: "Webflora Technologies builds custom attendance management software featuring AI face scanning, QR scanning, manual desk check-in, geofencing, and automated payroll sync.",
    url: "https://webfloratechnologies.com/attendance-management-software",
    siteName: "Webflora Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://webfloratechnologies.com/title-logo.png",
        width: 512,
        height: 512,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Attendance Management Software | AI Camera, QR & Manual Check-In",
    description: "Webflora Technologies builds custom attendance management software with AI camera face recognition, dynamic QR code check-in, manual web logging, and biometric HRMS integration.",
    images: ["https://webfloratechnologies.com/title-logo.png"],
  }
};

export default function AttendanceLayout({ children }) {
  return <>{children}</>;
}
