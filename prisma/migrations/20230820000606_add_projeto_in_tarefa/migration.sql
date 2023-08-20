/*
  Warnings:

  - Added the required column `id_projeto` to the `tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tarefas` ADD COLUMN `id_projeto` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tarefas` ADD CONSTRAINT `tarefas_id_projeto_fkey` FOREIGN KEY (`id_projeto`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
