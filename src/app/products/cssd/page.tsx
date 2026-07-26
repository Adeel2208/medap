import type { Metadata } from 'next'
import CategoryPageTemplate from '@/components/products/CategoryPage'
import { getCategory } from '@/data/categories'

const category = getCategory('cssd')!

export const metadata: Metadata = {
  title: category.title,
  description: category.longDescription,
}

export default function CssdPage() {
  return <CategoryPageTemplate category={category} />
}
