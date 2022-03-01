# Compte-Bancaire

## Contexte :

Vous êtes développeur junior au sein du service
informatique d’une enseigne bancaire.
Le coeur de cible de cette banque était jusqu’à
maintenant de proposer des services bancaires sur site.

Elle souhaite maintenant diversifier sa clientèle, entrer
de plein pied dans l’ère du numérique ( kek ...) et
(ENFIN) proposer à ses usagers un service bancaire en
ligne renouvelé afin d’attirer de nouveaux utilisateurs et
moderniser son offre.

La mission de votre équipe est de concevoir une
application qui permet à votre employeur la gestion de
ses comptes bancaires en ligne dans un premier temps
et dans un second temps de proposer des services de
gestion bancaire à vos clients (dépôts, virements, etc
...).

## Critères de performance :

Une API fonctionnelle doit être fournie avec la possibilité
que :

-  Chaque client corresponde un compte avec un
   numéro unique (one to many)
-  Chaque compte peut être débiteur ou créditeur
-  Chaque compte peut faire des retraits ou dépôts
-  Des transactions peuvent être effectuer entre
   tous les comptes via un formulaire, les montants
   doivent être correctement réaffectés.
-  Un dashboard permet de voir le listings de tous
   les comptes avec leur soldes
-  Chaque compte doit avoir une page avec les
   transactions

## Technos utilisées :

-  Framework: NestJS
-  DB : PostgreSQL
-  ORM: Prisma
-  Template Engine: à décider
