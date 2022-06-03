import Realm from "realm";
import SchemaDog from './schemas/dog'
import SchemaCat from './schemas/cat'

export default function realm(){
    return Realm.open({
        schema: [
            SchemaDog,
            SchemaCat
        ],
        schemaVersion: 2
    })
}