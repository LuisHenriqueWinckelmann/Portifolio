# Meu Bento Portfolio

Portfolio pessoal em estilo Bento Grid, construido com Next.js, React, TypeScript, Tailwind CSS, Framer Motion, next-intl e next-themes.

## Como rodar

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:3000/pt
http://localhost:3000/en
```

## Onde editar suas informacoes

- Dados principais, links, projetos e experiencias: `src/lib/data.ts`
- Textos em portugues: `public/locales/pt.json`
- Textos em ingles: `public/locales/en.json`
- Cores globais e tema: `src/app/[locale]/globals.css`
- Cards da home: `src/app/[locale]/page.tsx`

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl
- next-themes
- react-sortablejs
