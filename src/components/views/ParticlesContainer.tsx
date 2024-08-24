import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  IOptions,
  ISourceOptions,
  RecursivePartial,
  type Container,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { particlesConfig } from "../../config/particlesConfit";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => particlesConfig, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options as RecursivePartial<IOptions> | undefined}
      />
    );
  }

  return <></>;
};

export default ParticlesContainer;
