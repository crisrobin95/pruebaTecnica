import { fileURLToPath } from 'node:url'

const pathTransform = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export const alias = {
  '@auth': pathTransform('../components/auth'),
  '@client': pathTransform('../components/client'),
  '@events': pathTransform('../components/events'),
  '@language': pathTransform('../components/language'),
  '@layouts': pathTransform('../components/layouts'),
  '@misc': pathTransform('../components/misc'),
  '@modules': pathTransform('../components/modules'),
  '@sections': pathTransform('../components/sections'),
  '@templates': pathTransform('../components/templates'),
  '@ui': pathTransform('../components/ui'),
  '@svg': pathTransform('../components/svg'),
}
