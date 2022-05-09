import { ColumnsModel } from "src/app/shared/models/columns.model";


export const vehicleModelListColumns: ColumnsModel = {
    columns: [
        {
            type: 'string',
            apiValue: 'name',
            value: 'nombre',
        },
        {
            type: 'string',
            apiValue: 'brand',
            value: 'marca',
        },
        {
            type: 'string',
            apiValue: 'model',
            value: 'modelo',
        },
        {
            type: 'string',
            apiValue: 'powertrain',
            value: 'powertrain',
        },
        {
            type: 'boolean',
            apiValue: 'active',
            value: 'activo',
        },
        {
            type: 'string',
            apiValue: 'created',
            value: 'creado',
        },
        {
            type: 'action',
            apiValue: 'acciones',
            value: 'acciones',
        },
    ]
}
    