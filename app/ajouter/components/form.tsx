import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CategorySelect from "./../components/categorySelect";

interface formData {
    title: string;
    category: string;
    description: string;
}

export default function AddFeedbackForm({
    isFilterOpen,
    setIsFilterOpen,
}: {
    isFilterOpen: boolean;
    setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const initialFormData = {
        title: "",
        category: "",
        description: "",
    };
    const router = useRouter();
    const [currentCategory, setCurrentCategory] = useState<string>("");
    const [formData, setFormData] = useState(initialFormData as formData);
    const [error, setError] = useState<string>("");
    const [descriptionLength, setDescriptionLength] = useState<number>(0);

    useEffect(() => {
        setFormData({ ...formData, category: currentCategory });
    }, [currentCategory]);

    function handleFormChange(e: any) {
        if (e.target.id === "description") {
            setDescriptionLength(e.target.value.length);
            if (e.target.value.length < 500) {
                setFormData({ ...formData, [e.target.id]: e.target.value });
                setError("");
            } else {
                setError("Nombre maximum de caratères atteint");
            }
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (descriptionLength <= 500) {
            if (
                formData.title === "" ||
                formData.description === "" ||
                formData.category === ""
            )
                return setError("Tous les champs doivent être remplis");
            fetch("http://localhost:3000/api/feedback", {
                method: "POST",
                body: JSON.stringify(formData),
            }).then(() => router.push("/"));
        }
    }

    function handleClickOnCategory(category: string) {
        setCurrentCategory(category);
        setIsFilterOpen(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p className="text-lightDark font-semibold text-xl">Titre</p>
                <p className="text-gray-700 mb-2">
                    Ajoute un titre court et descriptif
                </p>
                <input
                    onChange={(e) => handleFormChange(e)}
                    type="text"
                    id="title"
                    className="w-full bg-gray-100 h-12 pl-4 pr-4 rounded-lg"
                    placeholder="Écris le titre ici"
                />
                <p className="text-lightDark font-semibold text-xl mt-5">
                    Catégorie
                </p>
                <p className="text-gray-700 mb-2">
                    Choisi la catégorie qui correspond à ta suggestion
                </p>
                <CategorySelect
                    handleClickOnCategory={handleClickOnCategory}
                    currentCategory={currentCategory}
                    isFilterOpen={isFilterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                />
                <p className="text-lightDark font-semibold text-xl mt-5">
                    Description
                </p>
                <p className="text-gray-700 mb-2">
                    Ajoute une description de ce qui devrait être changé
                </p>
                <textarea
                    onChange={(e) => handleFormChange(e)}
                    id="description"
                    className="h-24 bg-gray-100 w-full p-4 resize-none rounded-lg"
                    placeholder="Écris la description ici"
                ></textarea>
                <div className="flex justify-end mt-1">
                    <p>Caractères maximum: {descriptionLength} / 500</p>
                </div>
                {error && (
                    <div className="flex justify-center mt-1 -mb-2">
                        <span className="text-red-600">*{error}</span>
                    </div>
                )}
                <div className="flex justify-end mt-5">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="bg-lightDark hover:bg-slate-700 p-2 rounded-lg text-white"
                    >
                        Annuler
                    </button>
                    <button
                        type="submit"
                        className="bg-purple p-2 rounded-lg text-white hover:bg-[#aa11e7] ml-2"
                    >
                        Ajouter la suggestion
                    </button>
                </div>
            </form>
        </>
    );
}
