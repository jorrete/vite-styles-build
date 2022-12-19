import path from 'path';

export default {
  root: path.join(process.cwd(), 'src'),
  build: {
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames({ name }) {
          return name;
        },
        assetFileNames({ name }) {
          return name;
        },
      },
      input: {
        'my-folder/index.js': path.join(process.cwd(), 'src/my-folder/index.js'),
      },
    },
  },
};
