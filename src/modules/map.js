/*
    The class representing a map.

    Every entity on the map should have an id
    and implement the draw() function.
*/
class Map {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.entities = [];
    }

    /*
        Adds an entity to the map.
        The entity must have an id and
        implement draw().

        Todo: add draw() requirement check

        Returns:
          true: if the entity was added successfully
          false: if the entity was not added successfully
    */
    spawn(entity) {
        // Return false if entity is undefined, null, or hasn't implemented the draw function
        if (entity == undefined || entity == null || !Object.hasOwn(entity, "id")) {
            return false;
        }

        // Add the entity to the list
        try {
            this.entities.push(entity);
        } catch (error) {
            return false;
        }

        // Success
        return true;
    }

    /*
        Destroys all entities with a matching id.
    */
    destroy(entityId) {
        for (let i = 0; i < this.entities.length; i++) {
            if (this.entities[i].id == entityId) {
                this.entities.splice(i, 1);
            }
        }
    }

    /*
        Calls the draw function for all entities on the map
        using the passed ctx.
    */
    drawAll(ctx) {
        this.entities.forEach(function (entity) {
            entity.draw(ctx);
        });
    }
}

export { Map };
