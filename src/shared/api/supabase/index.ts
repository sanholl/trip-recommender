"use client";

import { createSupabaseBrowserClient } from "../../lib/supabse";

// tr-recommendation 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("tr_recommendation")
    .select("*")
    .is("deleted_at", null)
    .order("id", {
      ascending: false,
    });

  return result.data;
};

// tr-recommendation 가져오기 + by Id
export const getTodosById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("tr_recommendation")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);

  return result.data;
};

// tr-recommendation 가져오기 + search
export const getTodosBySearch = async (terms: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("tr_recommendation")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false })
    .limit(500);

  return result.data;
};

// tr-recommendation 생성하기
export const createTodos = async (recommendation: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("tr_recommendation")
    .insert({
      recommendation,
    })
    .select();

  return result.data;
};

// tr-recommendation softDelete
export const deleteTodosSoft = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("tr_recommendation")
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

//TODO -  tr-recommendation 업데이트 하기
// export const updateTodos = async (id: number, recommendation: string) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from("tr_recommendation")
//     .update({
//       recommendation,
//       updated_at: new Date().toISOString(),
//     })
//     .eq("id", id)
//     .select();

//   return result.data;
// };

// tr-recommendation hardDelete
// export const deleteTodosHard = async (id: number) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase.from("tr_recommendation").delete().eq("id", id);
//   return result.data;
// };