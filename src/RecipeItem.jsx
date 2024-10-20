import React from 'react';
import './css/recette.css';

const RecipeItem = ({ recipe }) => {
    // Affiche seulement les informations si la recette est publiée
    if (!recipe.isPublished) {
        return null; // Retourne null si la recette n'est pas publiée (n'affiche rien)
    }

    return (
        <li className="recipe-item">
            <h3>ID recette: {recipe.id}</h3>
            <h3>Titre: {recipe.title}</h3>
            <p><strong>Description:</strong> {recipe.description}</p>
            <p><strong>Ingrédients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Publié:</strong> {recipe.isPublished ? 'Oui' : 'Non'}</p>
            <p><strong>ID utilisateur:</strong> {recipe.user.id}</p>
        </li>
    );
};

export default RecipeItem;
