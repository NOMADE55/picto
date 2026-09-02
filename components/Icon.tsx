import { PropsWithChildren } from 'hono/jsx';
import { iconSvgBase64 } from '../icons/content.generated.ts';

interface Props {
  icon: string;
}

const Icon = ({ icon }: PropsWithChildren<Props>) => (
  <img src={'data:image/svg+xml;base64,' + iconSvgBase64[icon]} />
);

export default Icon;
