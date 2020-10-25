# Tp7 Gli: Réalisation de la partie Frontend (angular)

Auteur: Steven Tanguy
Master CCN

---

## Description: Mise en place de la partie frontend correspondant à notre Tp 3 TAA => Réalisation du Kanban avec de cartes.

Réalisation:

Création du composent my-card:

```
ng generate component my-card

```

Création du formulaire pour créer une carte.
Instanciation dans le Html de app-component-html:

```
<app-my-card></app-my-card>

```

Création des classes card et user:

```
ng g class user

```

---

Fichier card-apiservice.service.ts
Ce fichier contient le service suivant, rechercher une carte, detruir une carte, créer une carte. Il contient les methodes qui vont appeler les requêtes http de la partie backend.
Elles sont appeller dans my_card.component.ts dans les méthode utiliser dans le code html de la page lorsque l'utilisateur souhaite réaliser ces actions.

---

Fichier my_card.component.ts
Son rôle est de communiquer avec le code html de la page pour la rendre dynamique. On retouve la methode ngOnInit qui est appelée à l'initialisation de la page.

- On retrouve la méthode searchCard qui permet de rechercher une carte.
- La méthode deleteCardButton qui permet la supression d'une carte.
- La méthode createCardButton qui permet de créer une carte.
  Ces trois methodes sont appelées lorsque l'utilisateur click sur les bouton de la page Html.

Fonctionnalité:
Rien ne marche car la mise en place du proxy n'a pas fonctionné mais on peut voir que les requêtes http sont bien appeler car les logges mise en place dans la partie back and s'affiche lorsque l'on interagit avec la page web. Une erreur presente m'empêche d'allez plus loin:

```
Blocage d’une requête multiorigines (Cross-Origin Request) : la politique « Same Origin » ne permet pas de consulter la ressource distante située sur http://localhost:8080/card/get-by-libelle/undefined. Raison : l’en-tête CORS « Access-Control-Allow-Origin » est manquant.
```

---

Paramettrage du proxy entre Backend et front end:

création du fichier proxy-config.json qui permet de rediriger les URL de mon API il contient:

```
{
    "/api": {
        "target": "http://localhost:32045/",
        "secure": false
    }
}
```

Ensuite dans le fichier anglar.json j'ai ajouté dans le serve la ligne : "proxyConfig": "proxy-config.json"

Attention: cette methode ne marche que avec "ng serve et ne fonctionne plus en production.
