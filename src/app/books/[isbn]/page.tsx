"use client";
import { useEffect, useState } from "react";
import { getBookIsbn } from "@/app/api/getBookIsbn";
import { useParams, useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import BookDetails from "@/components/BookDetails";

const page = () => {
	const { isbn } = useParams();
	const router = useRouter();

	const [book, setBook] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchBook = async () => {
			try {
				const response = await getBookIsbn(isbn);
				setBook(response);
			} catch (e) {
				setError(true);
				router.push("/");
			} finally {
				setLoading(false);
			}
		};
		fetchBook();
	}, [isbn, router]);
	if (loading) {
		return (
			<Layout>
				<div className="w-full h-full flex justify-center items-center">
					<p>Cargando...</p>
				</div>
			</Layout>
		);
	}
	if (error) {
		return (
			<Layout>
				<h1>Libro no encontrado, redirigiendo...</h1>
			</Layout>
		);
	}
	return (
		<Layout>
			{book ? (
				<BookDetails
					Isbn={book.ISBN}
					Title={book.title}
					Author={book.author}
					Description={book.description}
					Price={book.price}
					Category={book.categories}
					imageUrl={book.imageUrl}
				/>
			) : (
				<h1>Libro no encontrado</h1>
			)}
		</Layout>
	);
};

export default page;