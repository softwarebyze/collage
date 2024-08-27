import { AnimatedCollageExample } from "@/collage/examples/AnimatedCollageExample";
import { AnimatedMediaExampleCollage } from "@/collage/examples/AnimatedMediaExampleCollage";
import { ColorBlockExampleCollage } from "@/collage/examples/ColorBlockExampleCollage";
import { MixedImageVideoCollage } from "@/collage/examples/MixedImageVideoCollage";
import { CollagePositioning } from "@/CollagePositioning";
import { AnimatedFitnessCollage } from "@/components/AnimatedFitnessCollage";
import FitnessCollage from "@/components/FitnessCollage";

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
        Animated Fitness Collage
        <AnimatedFitnessCollage />
        Fitness Collage
        <FitnessCollage />
        Animated Media Example
        <AnimatedMediaExampleCollage />
        Collage Positioning
        <div
          style={{
            width: "100%",
            border: "1px solid red",
            display: "flex",
          }}
        >
          <CollagePositioning />
        </div>
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
