import React from "react";
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dog from "./Pages/Dog.tsx";
import HomePage from "./Pages/HomePage.tsx";
import Cat from "./Pages/Cat.tsx";
import SmallPet from "./Pages/SmallPetPg.tsx";
import Bird from "./Pages/Bird.tsx";
import Aquatic from "./Pages/Aquatic.tsx";
import Vet from "./Pages/Vet.tsx";

import Supplements from "./Pages/CatalogPages/DogCatalog/Supplements.tsx";
import Kennels from "./Pages/CatalogPages/DogCatalog/Kennels.tsx";
import Crates from "./Pages/CatalogPages/DogCatalog/Crates.tsx";
import Beds from "./Pages/CatalogPages/DogCatalog/Beds.tsx";
import Toys from "./Pages/CatalogPages/DogCatalog/Toys.tsx";
import Grooming from "./Pages/CatalogPages/DogCatalog/Grooming.tsx";
import Leads from "./Pages/CatalogPages/DogCatalog/Leads.tsx";
import Bowls from "./Pages/CatalogPages/DogCatalog/Bowls.tsx";
import Clothing from "./Pages/CatalogPages/DogCatalog/Clothing.tsx";
import Technology from "./Pages/CatalogPages/DogCatalog/Technology.tsx";
import Puppy from "./Pages/CatalogPages/DogCatalog/Puppy.tsx";
import Breed from "./Pages/CatalogPages/DogCatalog/Breed.tsx";
import Parents from "./Pages/CatalogPages/DogCatalog/Parents.tsx";
import SpecialOffers from "./Pages/CatalogPages/DogCatalog/SpecialOffers.tsx";
import DogTrial from "./Pages/CatalogPages/DogCatalog/DogTrial.tsx";
import Burns from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Burns.tsx";
import Concept from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Concept.tsx";
import Science from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Science.tsx";
import Markus from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Markus.tsx";
import Rosies from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Rosies.tsx";
import Royal from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Royal.tsx";
import Size from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Size.tsx";
import Care from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Care.tsx";
import Veterinary from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Veterinary.tsx";
import Taste from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Taste.tsx";
import Wolf from "./Pages/CatalogPages/DogCatalog/DryFoodCatalog/Wolf.tsx";
import CatFlaps from "./Pages/CatalogPages/CatCatalog/CatFlaps.tsx";
import CatTreats from "./Pages/CatalogPages/CatCatalog/CatTreats.tsx";
import CatCare from "./Pages/CatalogPages/CatCatalog/CatCare.tsx";
import CatSupplements from "./Pages/CatalogPages/CatCatalog/CatSupplements.tsx";
import KittenProducts from "./Pages/CatalogPages/CatCatalog/KittenProducts.tsx";
import PetParents from "./Pages/CatalogPages/CatCatalog/PetParents.tsx";
import CatTrial from "./Pages/CatalogPages/CatCatalog/CatTrial.tsx";
import CatNew from "./Pages/CatalogPages/CatCatalog/CatNew.tsx";
import CatLitter from "./Pages/CatalogPages/CatCatalog/CatLitter.tsx";
import CatTrees from "./Pages/CatalogPages/CatCatalog/CatTrees.tsx";
import CatBaskets from "./Pages/CatalogPages/CatCatalog/CatBaskets.tsx";
import CatToys from "./Pages/CatalogPages/CatCatalog/CatToys.tsx";
import CatBowls from "./Pages/CatalogPages/CatCatalog/CatBowls.tsx";
import CatCarriers from "./Pages/CatalogPages/CatCatalog/CatCarriers.tsx";
import CatBreed from "./Pages/CatalogPages/CatCatalog/CatBreed.tsx";
import SmallPetPg from "./Pages/SmallPetPg.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dog",
    element: <Dog />,
  },
  {
    path: "/cat",
    element: <Cat />,
  },
  {
    path: "/SmallPet",
    element: <SmallPet />,
  },
  {
    path: "/Bird",
    element: <Bird />,
  },
  {
    path: "/Aquatic",
    element: <Aquatic />,
  },
  {
    path: "/Vet",
    element: <Vet />,
  },
  {
    path: "/Burns",
    element: <Burns />,
  },
  {
    path: "/Concept",
    element: <Concept />,
  },
  {
    path: "/Science",
    element: <Science />,
  },
  {
    path: "/Markus",
    element: <Markus />,
  },
  {
    path: "/Rosies",
    element: <Rosies />,
  },
  {
    path: "/Royal",
    element: <Royal />,
  },
  {
    path: "/Size",
    element: <Size />,
  },
  {
    path: "/Care",
    element: <Care />,
  },
  {
    path: "/Veterinary",
    element: <Veterinary />,
  },
  {
    path: "/Taste",
    element: <Taste />,
  },
  {
    path: "/Wolf",
    element: <Wolf />,
  },

  {
    path: "/Supplements",
    element: <Supplements />,
  },
  {
    path: "/Kennels",
    element: <Kennels />,
  },
  {
    path: "/Crates",
    element: <Crates />,
  },
  {
    path: "/Beds",
    element: <Beds />,
  },
  {
    path: "/Toys",
    element: <Toys />,
  },
  {
    path: "/Grooming",
    element: <Grooming />,
  },
  {
    path: "/Leads",
    element: <Leads />,
  },
  {
    path: "/Bowls",
    element: <Bowls />,
  },
  {
    path: "/Clothing",
    element: <Clothing />,
  },
  {
    path: "/Technology",
    element: <Technology />,
  },
  {
    path: "/Puppy",
    element: <Puppy />,
  },
  {
    path: "/Breed",
    element: <Breed />,
  },
  {
    path: "Parents",
    element: <Parents />,
  },
  {
    path: "/Special",
    element: <SpecialOffers />,
  },
  {
    path: "/DogTrial",
    element: <DogTrial />,
  },
  {
    path: "/CatLitter",
    element: <CatLitter />,
  },
  {
    path: "/CatTrees",
    element: <CatTrees />,
  },
  {
    path: "/CatBaskets",
    element: <CatBaskets />,
  },
  {
    path: "/CatToys",
    element: <CatToys />,
  },
  {
    path: "/CatBowls",
    element: <CatBowls />,
  },
  {
    path: "/CatFlaps",
    element: <CatFlaps />,
  },
  {
    path: "/CatTreats",
    element: <CatTreats />,
  },
  {
    path: "/CatCare",
    element: <CatCare />,
  },
  {
    path: "/CatSupplements",
    element: <CatSupplements />,
  },
  {
    path: "/CatCarriers",
    element: <CatCarriers />,
  },
  {
    path: "/Kitten",
    element: <KittenProducts />,
  },
  {
    path: "/CatBreed",
    element: <CatBreed />,
  },
  {
    path: "/PetParents",
    element: <PetParents />,
  },
  {
    path: "/SpecialOffers",
    element: <SpecialOffers />,
  },
  {
    path: "/CatTrial",
    element: <CatTrial />,
  },
  {
    path: "/CatNew",
    element: <CatNew />,
  },
  {
    path: "/SmallPetPg",
    element: <SmallPetPg />,
  },
  {
    path: "/",
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
