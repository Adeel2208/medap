import type { Metadata } from 'next'
import CategoryPageTemplate from '@/components/products/CategoryPage'
import { getCategory } from '@/data/categories'

const category = getCategory('neonatal-nursery')!

export const metadata: Metadata = {
  title: category.title,
  description: category.longDescription,
}

export default function NeonatalNurseryPage() {
  return <CategoryPageTemplate category={category} />
}
