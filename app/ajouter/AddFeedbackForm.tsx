import { useRouter } from "next/navigation";
import React from "react";

export default function AddFeedbackForm() {
    const router = useRouter();

    function handleSubmit(e: any) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p className="text-lightDark font-semibold text-xl">Titre</p>
                <p className="text-gray-700 mb-2">
                    Ajoute un titre court et descriptif
                </p>
                <input type="text" className="w-full bg-gray-200 h-12" />
                <p className="text-lightDark font-semibold text-xl mt-4">
                    Catégorie
                </p>
                <p className="text-gray-700 mb-2">
                    Choisi la catégorie qui correspond à ta suggestion
                </p>
                <input type="text" className="w-full bg-gray-200 h-12" />
                <p className="text-lightDark font-semibold text-xl mt-4">
                    Description
                </p>
                <p className="text-gray-700 mb-2">
                    Ajoute une description de ce qui devrait être changé
                </p>
                <textarea className="h-28 bg-gray-200 w-full"></textarea>
                <div className="flex justify-end mt-5">
                    <button
                        onClick={() => router.push("/")}
                        className="bg-lightDark hover:bg-slate-700 p-2 rounded-lg text-white"
                    >
                        Annuler
                    </button>
                    <button className="bg-purple p-2 rounded-lg text-white hover:bg-[#a6128e] ml-2">
                        Ajouter la suggestion
                    </button>
                </div>
            </form>
        </div>
    );
}
