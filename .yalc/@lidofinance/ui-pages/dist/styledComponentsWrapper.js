// Styled Components v5 has issues with ESM modules:
// https://github.com/styled-components/styled-components/issues/115
// https://github.com/rollup/rollup/issues/4438
// It can be solved by using Styled Components v6, which is in beta ATM
// But it will be better to stop using styled-components at all.
// This is a temporary workaround, which seems to work well.
import _styled from 'styled-components';
// @ts-expect-error Property 'default' does not exist on type 'StyledInterface'.
const styled = _styled.default || _styled;
export * from 'styled-components';
export default styled;
