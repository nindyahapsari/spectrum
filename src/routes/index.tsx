import { useRoutes } from 'react-router-dom';
import routes from './routes-data';

export default function RoutesRender() {
  const element = useRoutes(routes());
  return element;
}
