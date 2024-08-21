import { AnimatedCollageExample } from "@/collage/examples/AnimatedCollageExample";
import { AnimatedMediaExampleCollage } from "@/collage/examples/AnimatedMediaExampleCollage";
import { ColorBlockExampleCollage } from "@/collage/examples/ColorBlockExampleCollage";
import { MixedImageVideoCollage } from "@/collage/examples/MixedImageVideoCollage";

const App = () => {
  return (
    <>
      <h1>Welcome to this website!</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        Animated Media Example
        <AnimatedMediaExampleCollage />
        Animated Example
        <AnimatedCollageExample />
        Example Image and Video Collage
        <MixedImageVideoCollage style={{ height: 400 }} />
        <br />
        Example Color Blocks Collage
        <ColorBlockExampleCollage />
      </div>
    </>
  );
};

export default App;
