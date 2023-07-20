import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

interface UseScrollType {
  isLoading: boolean;
  scrollIsLoading: boolean;
  changeOffset: () => void;
  setScrollLoading: (loading: boolean) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}
const useScroll = ({
  isLoading,
  scrollIsLoading,
  setScrollLoading,
  containerRef,
  changeOffset,
}: UseScrollType) => {
  const {
    songAction: { search },
  } = useSelector(({ song }: { song: SongStoreType }) => song);

  const handleScroll = useCallback(async () => {
    if (containerRef?.current) {
      const scrollHeight = containerRef?.current?.scrollHeight;
      const scrollTop = containerRef?.current?.scrollTop;
      const clientHeight = containerRef?.current?.clientHeight;
      const isNotScrolledToBottom = scrollHeight - scrollTop !== clientHeight;

      if (isNotScrolledToBottom || isLoading || scrollIsLoading || search) {
        return;
      }
      setScrollLoading(true);
      changeOffset();
      setScrollLoading(false);
    }
  }, [
    containerRef,
    isLoading,
    scrollIsLoading,
    search,
    changeOffset,
    setScrollLoading,
  ]);

  useEffect(() => {
    const containerDivRef = containerRef.current;
    if (containerDivRef) {
      containerDivRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerDivRef) {
        containerDivRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLoading, handleScroll, containerRef]);
  return;
};
export default useScroll;
