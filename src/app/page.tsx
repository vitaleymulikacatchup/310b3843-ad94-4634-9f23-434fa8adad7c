"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/31574487/pexels-photo-31574487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Crescent moon in a colorful twilight sky over Cefalù, Sicily, capturing the serene beauty of dusk." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/96386/pexels-photo-96386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Elegant historic building facade with stone steps under bright sunlight, featuring intricate architectural details." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/2406708/pexels-photo-2406708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Scenic silhouette against a vibrant Sicily sunset, capturing nature's beauty." }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <NavbarStyleMinimal brandName="Sicily Travels" logoAlt="Sicily Travels" />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroBillboard 
            title="Discover Sicily" 
            description="Experience the beauty and culture of Sicily with us."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"} 
            imageAlt={assetMap.find(a => a.id === "hero-image")?.alt ?? "Decorative image"}
            buttons={[
              { text: "Explore Tours", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout 
            bulletPoints={[
              { title: "Rich History", description: "Explore ancient ruins and vibrant traditions." },
              { title: "Delicious Cuisine", description: "Indulge in Sicily's unique flavors and aromas." }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"} 
            imageAlt={assetMap.find(a => a.id === "about-image")?.alt ?? "Decorative image"}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit 
            tag="Newsletter" 
            title="Stay in Touch" 
            description="Subscribe to our newsletter for the latest updates and exclusive offers."
            imageSrc={assetMap.find(a => a.id === "contact-image")?.url ?? "/public/images/placeholder.webp"} 
            imageAlt={assetMap.find(a => a.id === "contact-image")?.alt ?? "Decorative image"}
            mediaPosition="right"
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase 
            columns={[
              { title: "Explore", items: [ { label: "About", href: "about" }, { label: "Contact", href: "contact" } ] },
              { title: "Learn More", items: [ { label: "Privacy Policy", href: "privacy" } ] }
            ]}
            copyrightText="© 2025 Sicily Travels"
            onPrivacyClick={() => console.log('Privacy')}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
