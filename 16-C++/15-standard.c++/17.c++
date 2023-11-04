//Key Features:
//If-init-statement: Introduces a new syntax for writing conditions with scope inside if and switch statements.
if(auto it = map.find(key); it != map.end())
{
    // Use it
}

//Structured Binding Declarations: Simplify the process of unpacking a tuple, pair, or other aggregate types.
map<string, int> data;
auto [iter, success] = data.emplace("example", 42);

//Inline variables: Enables inline keyword for variables and allows single definition of global and class static variables in header files.
inline int globalVar = 0;


//Folds expressions: Introduce fold expressions for variadic templates.
template <typename... Ts>
auto sum(Ts... ts)
{
    return (ts + ...);
}


//constexpr if statement: Allows conditional compilation during compile time.
template <typename T>
auto get_value(T t)
{
    if constexpr (std::is_pointer_v<T>)
    {
        return *t;
    }
    else
    {
        return t;
    }
}

//Improved lambda expression: Allows lambda to capture a single object without changing its type or constness.
auto func = [x = std::move(obj)] { /* use x */ };

//Standard file system library: std::filesystem as a standardized way to manipulate paths, directories, and files.

/*New Standard Library additions: <string_view> (non-owning string reference), <any> (type-safe discrimination union),
<optional> (optional value wrapper), <variant> (type-safe sum type), and <memory_resource> (library for polymorphic allocators).

Parallel Algorithms: Adds support for parallel execution of Standard Library algorithms.*/