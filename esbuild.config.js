import { build } from 'esbuild';

const shared = {
    entryPoints: ['src/index.ts'],
    platform: 'node',
    target: 'node24',
    sourcemap: true,
    bundle: true,
    external: ['vite', 'nunjucks'],
    outdir: 'dist'
};

await build({
    ...shared,
    format: 'esm',
});

await build({
    ...shared,
    format: 'cjs',
    outExtension: { '.js': '.cjs' }
});
