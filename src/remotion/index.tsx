import { registerRoot } from 'remotion';
import { Composition } from 'remotion';
import MetahorizonPromo from './MetahorizonPromo';

const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MetahorizonPromo"
        component={MetahorizonPromo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
