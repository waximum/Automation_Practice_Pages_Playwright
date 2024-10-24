import { test, expect } from '@playwright/test';

test('Connexion Home Page', async ({ page }) => {
  // Accéder à la page localhost
  await page.goto('http://localhost:8080/login.html');

  // Vérifier que la page se charge correctement avec le bon titre
  await expect(page).toHaveTitle(/Login Page/);

  // Sélecteurs
  const emailField = '#email';
  const passwordField = '#password';
  const submitButton = '[type="submit"]';

  // Remplir les champs de formulaire
  await page.locator(emailField).fill('adel1@hotmail.fr');
  await page.locator(passwordField).fill('78990#');

  // Cliquer sur le bouton de soumission
  await page.locator(submitButton).click();

  // Attendre une action spécifique ou un élément après soumission (exemple)
  // Attendez un élément visible qui devrait apparaître après la connexion
  await page.waitForTimeout(4000)

  // Vérifier que la page se charge correctement avec le bon titre
  await expect(page).toHaveTitle(/Automatisation Practice Page Debutant/);
  
  // Gérer les boîtes de dialogue (alert, confirm, prompt)
  page.on('dialog', dialog => dialog.accept());

  // Vérifier que le bouton d'alerte est visible
  const alertButton = page.locator('button[onclick="showAlert()"]');
  await expect(alertButton).toBeVisible();

  // Cliquer sur le bouton d'alerte et gérer l'alerte
  await alertButton.click();

// Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

  // Vérifier que le bouton de confirmation est visible et clicable
  const confirmButton = page.locator('button[onclick="showConfirm()"]');
  await expect(confirmButton).toBeVisible();
  await expect(confirmButton).toBeEnabled();

  // Cliquer sur le bouton de confirmation
  await confirmButton.click();
  // Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

  // Gérer le prompt avec un message personnalisé
  page.on('prompt', dialog => dialog.accept("Je m'appelle Adebola et je suis QA ingénieur"));
  const promptButton = page.locator('button[onclick="showPrompt()"]');

  // Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

  // Vérifier que le bouton de prompt est visible et clicable
  await expect(promptButton).toBeVisible();
  await expect(promptButton).toBeEnabled();

  // Cliquer sur le bouton de prompt
  await promptButton.click();

  // Vérifier que le champ de texte "Enter text" est visible et vide au départ
  const textInput = page.getByPlaceholder('Enter text');
  await expect(textInput).toBeVisible();
  await expect(textInput).toBeEmpty();

  // Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

  // Remplir le champ texte avec un message et vérifier son contenu
  const filledText = "je m'appelle Adebola et je suis QA ingénieur";
  await textInput.fill(filledText);
  await expect(textInput).toHaveValue(filledText);

  // Vérifier que le champ mot de passe est visible et vide
  const passwordInput = page.getByLabel('password');
  await expect(passwordInput).toBeVisible();
  await expect(passwordInput).toBeEmpty();

  // Remplir le champ mot de passe et vérifier son contenu (ne pas afficher le texte)
  await passwordInput.fill('Automatisation2024');
  await expect(passwordInput).toHaveValue('Automatisation2024');

  // Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

  // Cocher le bouton radio "Male" et vérifier qu'il est bien coché
  const maleRadio = page.locator('#male');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();

  // Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

  // Sélectionner l'option 2 dans le menu déroulant et vérifier la sélection
  const dropdown = page.locator('#choices');
  await page.selectOption("#choices", { label: 'Option 2' });
  await expect(dropdown).toHaveValue('option2');

  // Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

  // Cocher la checkbox 3 et vérifier qu'elle est bien cochée
const checkbox3 = page.locator('#check3'); // Sélectionner la checkbox avec l'ID #check3
await checkbox3.check(); // Cocher la checkbox
await expect(checkbox3).toBeChecked(); // Vérifier que la checkbox est bien cochée

// Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

// Sélectionner la date actuelle et la remplir dans le champ date
const date = new Date();
const currentDate = date.toISOString().split('T')[0]; // Obtenir la date actuelle au format YYYY-MM-DD
const selectDate = await page.locator('#date').fill(currentDate); // Remplir le champ date avec la date actuelle
await expect(page.locator('#date')).toHaveValue(currentDate); // Vérifier que la date sélectionnée est correcte

// Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

// Sélectionner l'élément input de type color et changer sa valeur
const colorInput = page.locator('#color'); // Sélectionner l'input de type color
const newColor = '#3498db'; // Nouvelle couleur hexadécimale
await colorInput.fill(newColor); // Remplir l'input color avec la nouvelle couleur
await expect(colorInput).toHaveValue(newColor); // Vérifier que la couleur sélectionnée est correcte

// Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

// Remplir le slider avec une nouvelle valeur et vérifier la valeur affichée
const color1 = '95'; // Nouvelle valeur pour le slider
const slider = page.locator('#range'); // Sélectionner le slider
await slider.fill(color1); // Remplir le slider avec la nouvelle valeur

// Vérifier que le témoin du slider affiche bien la valeur sélectionnée
const temoin = await page.locator('#rangeValue').textContent(); // Récupérer le texte du témoin de la valeur
await expect(temoin).toEqual(color1); // Vérifier que le témoin affiche la bonne valeur

// Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

// Remplir la zone de texte (textarea) avec un message personnalisé
await page.locator('#textarea').fill('Heyyy je suis Adebola QA ingénieur'); // Remplir la textarea avec du texte

// Effectuer un drag-and-drop d'un élément vers une zone de dépôt
await page.locator('#drag1').dragTo(page.locator('#dropzone')); // Glisser l'élément #drag1 dans la zone #dropzone

// Simuler un hover sur un élément avec le texte "Hover over me"
await page.getByText('Hover over me').hover(); // Passer la souris sur l'élément contenant le texte "Hover over me"

// Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

// Récupérer tout le contenu des cellules du tableau et l'afficher
const cells = await page.locator('table tbody tr td').allTextContents(); // Récupérer le texte de toutes les cellules du tableau
console.log(cells); // Afficher les cellules dans la console

// Vérifier les âges dans la deuxième colonne du tableau
const ligne = '2'; // Numéro de la colonne pour les âges
const ages = await page.locator(`table tbody tr td:nth-child(${ligne})`).allTextContents(); // Récupérer toutes les valeurs de la deuxième colonne (âges)
expect(ages).toEqual(['28', '24', '35']); // Vérifier que les âges correspondent à ceux attendus


// Remplissage des champs
await page.locator('#nameInput').fill('playwright');
await page.locator('#ageInput').fill('2024');
await page.locator('#jobInput').fill('QA-Automation');

// Récupération des valeurs des champs
const name = await page.locator('#nameInput').inputValue();
const age = await page.locator('#ageInput').inputValue();
const job = await page.locator('#jobInput').inputValue();

// Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

// Soumission du formulaire
await page.locator('button[type="submit"]').click();

// Ajout d'un délai de 1 secondes (1000 ms) après le remplissage du champ
await page.waitForTimeout(1000);

// Affichage des valeurs récupérées dans la console pour vérification manuelle
console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);

// Récupération des données dynamiques du tableau
const dynamique = await page.locator('#dynamicTableBody tr td').allTextContents();

// Vérification que les données dynamiques contiennent les valeurs saisies
// Utilisation de `expect` pour assurer que les valeurs du tableau incluent celles saisies
await expect(dynamique).toEqual(expect.arrayContaining([name, age, job]));


// Attendre 5 secondes pour observer le résultat (optionnel)
await page.waitForTimeout(5000); // Pause de 5 secondes
})

