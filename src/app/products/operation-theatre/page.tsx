import type { Metadata } from 'next'
import CategoryPageTemplate from '@/components/products/CategoryPage'
import { getCategory } from '@/data/categories'

const category = getCategory('operation-theatre')!

export const metadata: Metadata = {
  title: category.title,
  description: category.longDescription,
}

export default function OperationTheatrePage() {
  return <CategoryPageTemplate category={category} />
}
