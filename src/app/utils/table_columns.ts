import { Comportamentale } from '../data/model/comportamentale';
import { text_properties } from './text_properties';

export const table_columns = {
    comportamentale: {
        dati: [
            {
                columnDef: 'nominativoGDC', header: text_properties.table.col.lista_utenze,
                cell: (row: Comportamentale) => row.nominativoGDC
            },
            {
                columnDef: 'anteGDC', header: text_properties.table.col.ante_gdc,
                cell: (row: Comportamentale) => row.anteGDC
            },
            {
                columnDef: 'postGDC', header: text_properties.table.col.post_gdc,
                cell: (row: Comportamentale) => row.postGDC
            },
            {
                columnDef: 'consumiGDC', header: text_properties.table.col.delta_consumi_gdc,
                cell: (row: Comportamentale) => row.consumiGDC
            },
            {
                columnDef: 'nominativoGDT', header: text_properties.table.col.lista_utenze,
                cell: (row: Comportamentale) => row.nominativoGDT
            },
            {
                columnDef: 'anteGDT', header: text_properties.table.col.ante_gdt,
                cell: (row: Comportamentale) => row.anteGDT
            },
            {
                columnDef: 'postGDT', header: text_properties.table.col.post_gdt,
                cell: (row: Comportamentale) => row.postGDT
            },
            {
                columnDef: 'consumiGDT', header: text_properties.table.col.delta_consumi_gdt,
                cell: (row: Comportamentale) => row.consumiGDT
            },
        ]
    },
};


