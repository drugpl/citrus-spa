class InMemoryStorage

  loadData: =>
    drug = new Organization("DRUG")
    citrus = drug.addProject("Citrus")
    citrus.addBuild("Build 13",
                    "[Shared] Game has awarded prizes via players not via prizes. Prizes can be deleted and game still has awarded prizes")
    return drug



