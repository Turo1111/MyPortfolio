import LazySection from "@/components/LazySection";

export default function Home() {
  return (
    <main>
      <LazySection component="Hero" minHeight="100vh" />
      <LazySection component="About" minHeight="400px" />
      <LazySection component="Skills" minHeight="400px" />
      {/* <LazySection component="MainSkills" minHeight="300px" /> */}
      <LazySection component="Portfolio" minHeight="500px" />
      <LazySection component="Experience" minHeight="400px" />
      <LazySection component="Contact" minHeight="400px" />
      <LazySection component="Footer" minHeight="200px" />
    </main>
  );
}
