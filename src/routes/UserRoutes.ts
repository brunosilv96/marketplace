import { Router } from "express";
const router = Router();

// Import UsesCase
import { UserUseCase } from "@/domain/data/useCaseUser/createNewUser";

router.get("/api/user/:id");

module.exports = router;
