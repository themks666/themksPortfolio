"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { useSearchParams,useRouter } from "next/navigation";

const SearchBar = ({searchParamsName}:{searchParamsName:string}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get(`${searchParamsName}`) || "";
  function updateParams(update:Record<string, string>){
    const params = new URLSearchParams(searchParams);
    Object.entries(update).forEach(([Key, value])=>{
      if(value){
        params.set(Key, value);
      }else{
        params.delete(Key)
      }
      router.push(`?${params.toString()}`)
    })
    
  }


  return (
    <div>
      <InputGroup className="my-5 bg-gray-950/10 grow focus-within:border-0">
        <InputGroupInput
          value={queryParam}
          onChange={(e) => updateParams({[searchParamsName]: e.target.value})}
          placeholder="Search..."
          className=" focus:ring-emerald-700"
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupButton
          onClick={() => updateParams({[searchParamsName]: ""})}
          className="bg-rose-700 h-full px-4 rounded-l-none"
        >
          Reset
        </InputGroupButton>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
