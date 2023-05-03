import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CategorySelect from "./../components/categorySelect";

interface formData {
    title: string;
    category: string;
    description: string;
}

interface formProps {
    isFilterOpen: boolean;
    setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
    oldFeedback: any;
}

export default function UpdateFeedbackForm({
    isFilterOpen,
    setIsFilterOpen,
    oldFeedback,
}: formProps) {
    const initialFormData = {
        title: oldFeedback.title,
        category: "",
        description: oldFeedback.description,
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
                    value={formData.title}
                    id="title"
                    className="w-full bg-gray-200 h-12 pl-4 pr-4"
                />
                <p className="text-lightDark font-semibold text-xl mt-4">
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
                <p className="text-lightDark font-semibold text-xl mt-4">
                    Description
                </p>
                <p className="text-gray-700 mb-2">
                    Ajoute une description de ce qui devrait être changé
                </p>
                <textarea
                    onChange={(e) => handleFormChange(e)}
                    id="description"
                    value={formData.description}
                    className="h-28 bg-gray-200 w-full p-4"
                ></textarea>
                <div className="flex justify-end">
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
                        onClick={() =>
                            router.push(`/modifier/${oldFeedback.id}`)
                        }
                        className="bg-lightDark hover:bg-slate-700 p-2 rounded-lg text-white"
                    >
                        Annuler
                    </button>
                    <button
                        type="submit"
                        className="bg-purple p-2 rounded-lg text-white hover:bg-[#a6128e] ml-2"
                    >
                        Ajouter la suggestion
                    </button>
                </div>
            </form>
        </>
    );
}
