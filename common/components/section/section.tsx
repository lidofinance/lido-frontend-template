import { SectionComponent } from './types';
import {
  SectionStyle,
  SectionHeaderStyle,
  SectionTitleStyle,
  SectionHeaderDecoratorStyle,
} from './styles';

const Section: SectionComponent = (props) => {
  // TODO: `title`, `headerDecorator` is not necessary
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
      {children}
    </SectionStyle>
  );
};

export default Section;
