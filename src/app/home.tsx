"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// imports custom components
import CustomMenu from "@/components/CustomMenu";
import FooterSection from "@/components/FooterSection";
// imports Icons
import HomeIcon from "@/assets/icons/HomeIcon";
import ProductsIcon from "@/assets/icons/ProductsIcon";
import RecomentsIcon from "@/assets/icons/RecomentsIcon";
import FacebookIcon from "@/assets/socials/FacebookIcon";
import TwitterIcon from "@/assets/socials/TwitterIcon";
import InstagramIcon from "@/assets/socials/InstagramIcon";

function HomePage() {
	const router = useRouter();

	const handleLoginRedirect = () => {
		router.push("/login");
	};

	const handleCartRedirect = () => {
		router.push("/cart");
	};

	return (
		<div className="w-full h-full">
			<header className="w-full h-1/5 bg-marron">
				<div className="p-4 h-[60%] flex justify-center">
					<Image
						src="/webp/logo.webp"
						width={78}
						height={100}
						alt="logo"
					/>
				</div>
				<div className="flex h-2/5 w-full justify-around p-4 items-center">
					<CustomMenu
						icon={
							<HomeIcon className="text-blue-500 w-10 h-10 hover:scale-105" />
						}
						title="Inicio"
						onClick={handleLoginRedirect}
					></CustomMenu>
					<CustomMenu
						icon={
							<ProductsIcon className="text-blue-500 w-10 h-10 hover:scale-105" />
						}
						title="Productos"
						onClick={handleLoginRedirect}
					></CustomMenu>
					<CustomMenu
						icon={
							<RecomentsIcon className="text-blue-500 w-10 h-10 hover:scale-105" />
						}
						title="Recomendados"
						onClick={handleLoginRedirect}
					></CustomMenu>
					<div className="p-4 flex items-center cursor-pointer">
						<button
							className="bg-[blue] text-white px-4 py-3 rounded-xl hover:bg-blue-500 text-base font-black hover:text-black"
							onClick={handleLoginRedirect}
						>
							INICIAR SESION
						</button>
					</div>
				</div>
			</header>
			<article className="bg-[url(/webp/Welcome.webp)] w-full h-full bg-no-repeat bg-cover bg-center py-[5%] px-0">
				<h1 className="my-0 mx-[20%] text-5xl">Bienvenidos</h1>
				<p className="w-2/4 my-[5%] mx-[20%] text-xl">
					Explora un universo de historias, conocimiento e inspiración
					en nuestra tienda en línea. Ofrecemos una cuidadosa
					selección de libros para todos los gustos: desde fascinantes
					novelas y clásicos inmortales, hasta guías prácticas y las
					últimas tendencias literarias. Nuestro compromiso es
					acercarte el placer de la lectura con comodidad, precios
					justos y un servicio excepcional. ¡Descubre tu próxima gran
					lectura hoy mismo!
				</p>
			</article>
			<footer className="bg-marron text-white px-[10%] py-5 h-1/3 flex flex-col items-center justify-center">
				<div className="flex justify-between w-full mb-5">
					<FooterSection title="Contantanos">
						<p className="text-base mx-1 my-0 text-white">
							📍 Dirección: Calle Ficticia #123, Ciudad
						</p>
						<p className="text-base mx-1 my-0 text-white">
							📞 Teléfono: +52 55 1234 5678
						</p>
						<p className="text-base mx-1 my-0 text-white">
							📧 Email: contacto@tu-tienda.com
						</p>
					</FooterSection>
					<FooterSection title="Enlaces Rapidos">
						<ul className="no-underline text-white list-none p-0">
							<li>
								<a
									className="hover:underline cursor-pointer"
									onClick={handleLoginRedirect}
								>
									Inicio
								</a>
							</li>
							<li>
								<a
									className="hover:underline cursor-pointer"
									onClick={handleLoginRedirect}
								>
									Productos
								</a>
							</li>
							<li>
								<a
									className="hover:underline cursor-pointer"
									onClick={handleLoginRedirect}
								>
									Recomendamos
								</a>
							</li>
							<li>
								<a
									className="hover:underline cursor-pointer"
									onClick={handleLoginRedirect}
								>
									Carrito
								</a>
							</li>
						</ul>
					</FooterSection>
					<FooterSection title="Siguenos">
						<div className=" flex flex-row">
							<FacebookIcon
								className="w-8 h-8 mr-3 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
								onClick={handleLoginRedirect}
								alt="F"
							></FacebookIcon>
							<TwitterIcon
								className="w-8 h-8 mr-3 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
								alt="Twitter"
								onClick={handleCartRedirect}
							/>
							<InstagramIcon
								className="w-8 h-8 mr-3 transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
								alt="X"
								onClick={handleCartRedirect}
							/>
						</div>
					</FooterSection>
				</div>
				<div className="text-center text-sm border-t-[1px] border-t-black p-3 w-full">
					<p>
						© 2024 Tu Tienda de Libros. Todos los derechos
						reservados.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default HomePage;
