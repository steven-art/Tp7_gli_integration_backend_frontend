# Tp7 Gli: Réalisation de la partie Frontend (angular)

author: Steven Tanguy
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

---

Fichier my_card.component.ts

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
