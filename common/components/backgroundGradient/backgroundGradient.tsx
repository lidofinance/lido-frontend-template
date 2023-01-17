import {
  BackgroundGradientSvgStyle,
  BackgroundGradientStartStyle,
  BackgroundGradientStopStyle,
} from './styles';
import { BackgroundGradientComponent } from './types';

// svg gradient looks better than css gradient in some browsers

// TODO: think about move to https://ui.lido.fi
const BackgroundGradient: BackgroundGradientComponent = (props) => {
  const { width, height, ...rest } = props;

  return (
    <BackgroundGradientSvgStyle width={width} height={height} {...rest}>
      <radialGradient id="background-gradient" cx="50%" y="50%">
        <BackgroundGradientStartStyle offset="0%" />
        <BackgroundGradientStopStyle offset="100%" />
      </radialGradient>
      <rect
        width={width}
        height={height}
        opacity=".1"
        fill="url(#background-gradient)"
      />
    </BackgroundGradientSvgStyle>
  );
};

export default BackgroundGradient;
