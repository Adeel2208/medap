import type { Metadata } from 'next'
import CategoryPageTemplate from '@/components/products/CategoryPage'
import { getCategory } from '@/data/categories'

const category = getCategory('intensive-care')!

export const metadata: Metadata = {
  title: category.title,
  description: category.longDescription,
}

export default function IntensiveCarePage() {
  return <CategoryPageTemplate category={category} />
}
