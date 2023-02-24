import { SectionType } from './types';
import {
  SectionStyle,
  SectionHeaderStyle,
  SectionTitleStyle,
  SectionHeaderDecoratorStyle,
} from './styles';

// TODO: move to UI ???
const Section: SectionType = (props) => {
  const { title, headerDecorator, children, ...rest } = props;

  return (
    <SectionStyle {...rest}>
      {title && (
        <SectionHeaderStyle>
          <SectionTitleStyle>{title}</SectionTitleStyle>
          {headerDecorator && (
            <SectionHeaderDecoratorStyle>
              {headerDecorator}
            </SectionHeaderDecoratorStyle>
          )}
        </SectionHeaderStyle>
      )}
      {children}
    </SectionStyle>
  );
};

export default Section;
