import { CustomRC } from './interface';

export const isTokenExpired = (_: any) => false;

export function amendRouter(router: CustomRC) {
  const children = router.children.map((c) => {
    c.name = router.name + '-' + c.path;
    if (c.meta === undefined) {
      c.meta = {};
    }
    return c;
  });

  const redirect = {
    name: children[0].name,
  };

  return {
    ...router,
    redirect,
    children,
  };
}
