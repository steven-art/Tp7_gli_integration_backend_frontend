# Tp7 Gli: Réalisation de la partie Frontend (angular)

Auteur: Steven Tanguy
Master CCN

---

## Description: Mise en place de la partie frontend correspondant à notre Tp 3 TAA => Réalisation du Kanban avec de cartes.

Réalisation:  
IL n'y a que la partie ajout d'une carte, supression d'une carte et recherche d'une carte qui est disponnible sur l'interface utilisateur.

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
  Ces trois methodes sont appelées lorsque l'utilisateur click sur les boutons de la page Html.

Fonctionnalité:
On peut voir que les requêtes http sont bien appeler car les logges mise en place dans la partie backend and s'affiche lorsque l'on interagit avec la page web. on peut voir aussi que dans la console le proxy cherche a faire le mapping entre les 2 requêtes http mais rien ne se passe au niveau de la base de données mySQL.

---

Paramettrage du proxy entre Backend et front end:

création du fichier proxy-config.json qui permet de rediriger les URL de mon API il contient:

```
{
  "/api/*": {
    "target": "http://localhost:8080",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true
  }
}
```

Pour lancer le sever il faut utilisé la commande:

```
ng serve --proxy-config proxy-config.json

```

Attention: cette methode ne marche que avec "ng serve et ne fonctionne plus en production.

Ensuite dans le fichier anglar.json j'ai ajouté dans le serve la ligne : "proxyConfig": "proxy-config.json"

Ensuite il faut lancer côté backend la base de donné phpMyAdmin :

```
sudo docker start some-mysql myadmin

```

Et faire un run du Projet de TAA recuperable a l'addresse suivant : https://github.com/steven-art/Ensemble_des_tps_de_TAA_2020/tree/master/eclipse-workspace/Tp3TAA/Spring2020-master/spring-boot-sample-data-jpa-standalone
