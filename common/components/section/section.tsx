import { SectionComponent } from './types';
import {
  SectionStyle,
  SectionHeaderStyle,
  SectionTitleStyle,
  SectionHeaderDecoratorStyle,
  SectionContentStyle,
} from './sectionStyles';

// TODO: think about move to https://ui.lido.fi
const Section: SectionComponent = (props) => {
  const { title, headerDecorator, children, ...rest } = props;
  const hasDecorator = !!headerDecorator;

  return (
    <SectionStyle {...rest}>
      <SectionHeaderStyle>
        <SectionTitleStyle>{title}</SectionTitleStyle>
        {hasDecorator && (
          <SectionHeaderDecoratorStyle>
            {headerDecorator}
          </SectionHeaderDecoratorStyle>
        )}
      </SectionHeaderStyle>
      <SectionContentStyle>{children}</SectionContentStyle>
    </SectionStyle>
  );
};

export default Section;
