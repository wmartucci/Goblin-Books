import axios from "axios";
import {CategoryContext} from "../contexts/CategoryContext";
import React, {useEffect, useState} from "react";
import type {CategoryItem} from "../types.tsx"

function CategoryProvider({children}: { children: React.ReactNode }) {
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const categoriesUrl = import.meta.env.VITE_URL_PREFIX + `${import.meta.env.BASE_URL}/api/categories`;

    useEffect(() => {
        axios.get(categoriesUrl)
            .then(response => setCategories(response.data));
    }, [categoriesUrl]);

    return (
        <CategoryContext.Provider value={categories}>
            {children}
        </CategoryContext.Provider>
    );
}

export default CategoryProvider;